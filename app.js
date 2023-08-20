const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

// create function for additem
function addItem(e){
    e.preventDefault();
 const newItem = itemInput.value

 // validate input
 if(newItem ===''){
    alert('please enter an item')
    return
   
 }

//create list item
const li = document.createElement('li')
li.appendChild(document.createTextNode(newItem))

const button = createButton('remove-item btn-link text-red')
li.appendChild(button)

itemList.appendChild(li)
itemInput.value=''


checkUI()
}
// function to create button
function createButton(classes){
    const button = document.createElement('button')
    button.className=classes

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}
//FUNCTION TO CREATE ICONS
function createIcon(classes){
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}
//FUNCTION TO REMOVE & CLEAR ITEM
function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove()

        checkUI()
    }
}
//for clear button
function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
    // itemList.innerHTML = ''
    checkUI()
}
//CLEAR UI STATE
function checkUI(){
    const items = document.querySelectorAll('li')
    if(items.length === 0){
        clearBtn.style.display='none'
        itemFilter.style.display= 'none'
    }else{
        clearBtn.style.display='block'
        itemFilter.style.display= 'block'
    }
}
//function to crete filter item
function filteritem(e){
    const item = document.querySelectorAll('li')
        const text = e.target.value.toLowerCase()
    item.forEach((item) =>{
        const itemName = item.firstChild.textContent.toLowerCase()

        if(itemName.indexOf(text) != -1){
            item.style.display = 'flex'
        } else{
            item.style.display = 'none'
        }
    })
}


// add event Listener
itemForm.addEventListener('submit' , addItem)
itemList.addEventListener('click' , removeItem)
clearBtn.addEventListener('click' , clearItems)
itemFilter.addEventListener('input' , filteritem)


checkUI()