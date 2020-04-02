var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup',filterItems);


    //removeitem
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('r u sure?')){
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }



// Add Item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    // create new li element
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append li to list
    li.appendChild(deleteBtn);
    
    itemList.appendChild(li);
}

    // filter items func
    function filterItems(e){
        //convert to  lower case
        var text = e.target.value.toLowerCase();
        // get lis
        var items = itemList.getElementsByTagName('li');
        //conver html collection to array
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) !=-1){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
                }
            
        })
    }

