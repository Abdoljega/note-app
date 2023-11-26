
var addnote = document.querySelector('.addBtn')
var listed = document.querySelector('.noteList-container')
var closes = document.querySelectorAll('.cls')
var listContainer = document.querySelector('.listContainer')
var notelist = document.querySelector('.list')
var right = document.querySelector('.right-container')
var ul = document.querySelector('#ul')

var lists;
document.onclick = (e)=>{
    let menu = document.querySelectorAll('.item-icons')


    // console.log(e)

    if(e.target.id == 'menuSvg'){
        menu.forEach(mn =>{
        // console.log(mn.parentElement.children[0].isClick)

            mn.classList.remove('active')

        })
        e.target.parentElement.children[1].classList.toggle('active')

    }

    if(e.target.id !== 'item-icons' && e.target.id !== 'menuSvg'){
        menu.forEach(mn =>{
            mn.classList.remove('active')

        })
        // document.removeEventListener
    }
}


notelist.addEventListener('click', e=>{
    listContainer.style.display = 'flex'
})
closes.forEach(close =>{
    close.addEventListener('click', e=>{
        listContainer.style.display = 'none'
    })
})

function template(title, message){

    let noteCon = document.createElement('div')
    noteCon.classList.add('note-container')
    noteCon.innerHTML = `<div class="bar">
                        <div class="iconsSite">
                            
                            <div class="saveCon con">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg>
                            </div>
                            <div class="closeCon con" id="close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="text-site">
                        <textarea name="" id="text" cols="30" rows="10"></textarea>
                    </div>`
       
    right.append(noteCon)
    var save = noteCon.querySelector('.saveCon')
    var text = noteCon.querySelector('#text')
    var close = noteCon.querySelector('#close')
    
    save.addEventListener('click', e=>{
        console.log(text.value)
        saveItem(text.value)
    
    })
    close.addEventListener('click', e=>{
        console.log(close.parentElement.parentElement.parentElement)
        let remoceEle = close.parentElement.parentElement.parentElement

        remoceEle.remove()
    })
}


addnote.addEventListener('click', template)


function saveItem(txt){
    
    let checkTitle = document.querySelectorAll('li')
    if(txt){
    let li = document.createElement('div')
    li.classList.add('item')
    li.innerHTML = `<div class="item-text-container">
                            <p>${txt}</p>
                            
                        </div>
                        <div class="item-menu">
                            <svg class="menuSvg" id="menuSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg> 
                            <div class="item-icons" id="item-icons">
                                <div class="item-edit items">
                                    <div class="deledi-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>
                                    </div>
                                    <h4>Edit</h4>
                                </div>
                                <div class="item-delete items">
                                    <div class="deledi-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                    </div>
                                    <h4>Delete</h4>
                                
                                </div>
                            </div>
                        </div>`

        listed.append(li)
        let editBtn = li.querySelector('.item-edit')
        let deleteBtn = li.querySelector('.item-delete')

        var menuSvg = li.querySelector('.menuSvg')
        let menus = document.querySelectorAll('.item-icons')
        var menu = li.querySelector('.item-icons')

        
            // menuSvg.onclick =(e)=>{
            //     menu.classList.toggle('active')
            // }

        deleteBtn.addEventListener('click', e=>{
            li.remove()
        })
        editBtn.addEventListener('click', e=>{


            listContainer.style.display = 'none'
            let message = li.querySelector('p')
            console.log(message)
            let noteCon = document.createElement('div')
            noteCon.classList.add('note-container')
            noteCon.innerHTML = `<div class="bar">
                                <div class="iconsSite">
                                    
                                    <div class="saveCon con">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg>
                                    </div>
                                    <div class="closeCon con" id="close">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="text-site">
                                <textarea name="" id="text" cols="30" rows="10">${message.textContent}</textarea>
                            </div>`
               
            right.append(noteCon)
            var close = noteCon.querySelector('#close')
            var save = noteCon.querySelector('.saveCon')
            var text = noteCon.querySelector('#text')

            save.addEventListener('click', e=>{
                message.textContent = text.value
            
            })

            close.addEventListener('click', e=>{
                console.log(close.parentElement.parentElement.parentElement)
                let remoceEle = close.parentElement.parentElement.parentElement
        
                remoceEle.remove()
            })

            // template('hello', message)
        })    
        
        
    }
}







