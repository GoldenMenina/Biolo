function removeFromCart(itemId) {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  
    // Convert itemId to a number if it's a string
    const idToRemove = parseInt(itemId, 10);
  
    // Map through the cart items and update the quantity
    const updatedItems = cartItems
      .map(item => {
        if (item.id === idToRemove) {
          // Subtract 1 from quantity if it's the matching item
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      // Filter out items where quantity is less than or equal to 0
      .filter(item => item.quantity > 0);
  
    // Save the updated items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }
  
  function addToCart(itemId) {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let itemExists = false;
  
    // Convert itemId to a number if it's a string
    const idToAdd = parseInt(itemId, 10);
  
    // Check if the item already exists in the cart
    const updatedItems = cartItems.map(item => {
      if (item.id === idToAdd) {
        itemExists = true;
        // Add 1 to quantity if it's the matching item
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    // If the item doesn't exist, add it to the cart with full details
    if (!itemExists) {
      const newItem = cartItems.find(item => item.id === idToAdd);
      if (newItem) {
        updatedItems.push({ ...newItem, quantity: 1 });
      }
    }
  
    // Save the updated items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }
  function deleteFromCart(itemId) {

    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Convert itemId to a number if it's a string
    const idToDelete = parseInt(itemId, 10);
  
    // Filter out the item with the matching id
    const updatedItems = cartItems.filter(item => item.id !== idToDelete);
  
    // Save the updated items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    if(cartItems.length == 0){
        localStorage.removeItem('cartItems');
    }
  
    console.log('Item removed from cart:', idToDelete);
}

  
  const sendWhatsAppMessage = (totalPrice) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.removeItem('cartItems');
    const message = cartItems.map(item => (
      `${item.quantity} ${item.corte} (${item.categoria}) - ${item.preco} Kz`
    )).join('\n');

    const totalPriceMessage = `Total: ${totalPrice} Kz`;
    // const commentsMessage = additionalComments ? `\n\nAdditional Comments: ${additionalComments}` : '';
    const whatsappMessage = encodeURIComponent(`${message}\n\n${totalPriceMessage}`);
    const whatsappUrl = `https://wa.me/+244931781843?text=${whatsappMessage}`;
    localStorage.setItem('cartItems', JSON.stringify([]));
    window.open(whatsappUrl, "_blank");
    window.location.reload();
    

    
  };
  

 
   
  
  // Select all buttons with the class 'add-btn'

  
  const buyButton = document.getElementById('fazercompra');

// Add a click event listener to the button
buyButton.addEventListener('click', function() {
  // The function that gets executed when the button is clicked
 
  const itemId = this.getAttribute('data-id');
  sendWhatsAppMessage(itemId);
});


function applyListeners() {
  const buttonsAdd = document.querySelectorAll('.add-btn');
  buttonsAdd.forEach(function(button) {
    // Remove existing listener before adding a new one
    button.removeEventListener('click', handleAddClick);

    button.addEventListener('click', handleAddClick);
  });

  const buttonsMinus = document.querySelectorAll('.minus-btn');
  buttonsMinus.forEach(function(button) {
    // Remove existing listener before adding a new one
    button.removeEventListener('click', handleMinusClick);

    button.addEventListener('click', handleMinusClick);
  });

  const buttonsDelet = document.querySelectorAll('.deletebtn');
  buttonsDelet.forEach(function(button) {
    // Remove existing listener before adding a new one
    button.removeEventListener('click', handleMinusClick);

    button.addEventListener('click', handleDeleteClick);
  });
}
function handleDeleteClick(event) {
  const itemId = this.getAttribute('data-id');
  deleteFromCart(itemId);
}

function handleAddClick(event) {
  const itemId = this.getAttribute('data-id');
  addToCart(itemId);
  console.log('Added to cart:', itemId);
}

function handleMinusClick(event) {
  const itemId = this.getAttribute('data-id');
  removeFromCart(itemId);
  console.log('Removed from cart:', itemId);
}

// Poll every 1 second to check for the buttons
setInterval(() => {
  applyListeners();
}, 1000);

// Apply listeners initially
applyListeners();

