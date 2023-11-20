



var addnote = document.querySelector('.addNoteSite')
var listed = document.querySelector('.noteList-container')
var closes = document.querySelector('.close')
var listContainer = document.querySelector('.listContainer')
var notelist = document.querySelector('#notelist')
var right = document.querySelector('.right-container')
var ul = document.querySelector('#ul')

var lists;

notelist.addEventListener('click', e=>{
    listContainer.style.display = 'flex'
})
closes.addEventListener('click', e=>{
    listContainer.style.display = 'none'
})
function template(title, message){
    let noteCon = document.createElement('div')
    noteCon.classList.add('note-container')
    if(message){
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
                            <textarea name="" id="text" cols="30" rows="10">${message}</textarea>
                        </div>
                        <div class="save-site">
                            <input type="text" placeholder="File Name" class="fileName"  style ="display:'none">
                            <input type="button" value="Save">
                        </div>`
    } else{
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
                </div>
                <div class="save-site">
                    <input type="text" placeholder="File Name" class="fileName">
                    <input type="button" value="Save">
                </div>`
    }    
    right.append(noteCon)
    var save = noteCon.querySelector('.saveCon')
    var text = noteCon.querySelector('#text')
    var close = noteCon.querySelector('#close')
    
    save.addEventListener('click', e=>{
        console.log(text.value)
        let saveSite = noteCon.querySelector('.save-site')
        let va = noteCon.querySelector('.fileName')
        // saveSite.children
        // saveSite.style.display = 'block'
        console.log(va)
        saveItem(text.value)
        
        lists = document.querySelectorAll('li')
        console.log(lists)
    
    })
    close.addEventListener('click', e=>{
        console.log(close.parentElement.parentElement.parentElement)
        let remoceEle = close.parentElement.parentElement.parentElement

        remoceEle.remove()
    })
}


addnote.addEventListener('click', template)


     
    // console.log(lists)
    function EditFun(){
        if(lists){
            lists.forEach(list =>{
                list.addEventListener('click', e=>{
                    let message = list.querySelector('p').textContent
                    console.log(message)
                    template('hello', message)
                })
                
            })
        }
    }
    
    




function saveItem(txt){

    let checkTitle = document.querySelectorAll('li')

    let li = document.createElement('div')
    li.classList.add('item')
    li.innerHTML = `<div class="item-text-container">
                        <p>${txt}</p>
                    </div>
                    <div class="item-icons">
                        <div class="item-edit items">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>

                        </div>
                        <div class="item-delete items">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        </div>
                    </div>`

        listed.append(li)
        let editBtn = li.querySelector('.item-edit')
        let deleteBtn = li.querySelector('.item-delete')

        deleteBtn.addEventListener('click', e=>{
            li.remove()
        })
        editBtn.addEventListener('click', e=>{
            listContainer.style.display = 'none'
            let message = li.querySelector('p').textContent
            console.log(message)
            template('hello', message)
        })
    // console.log(checkTitle)

    // if(checkTitle.length > 0){
    //     checkTitle.forEach(item =>{
    //         let chTitle = item.querySelector('h3').textContent
    //         let vaTitle = item
    //         let chMessage = item.querySelector('p').textContent

    //         if(chTitle == 'Note'){
    //             // item.querySelector('h3').textContent = 'Note 1'
    //             item.querySelector('p').textContent = txt
    //             console.log(chMessage)
    //         } else {
                
    //             let li = document.createElement('div')
    //             li.classList.add('item')
    //             li.innerHTML = `<div class="item-text-container">
    //                                 <p>This chapter covers the design of the existing design. The proposed designed would be the design and implementation of a simple scientific calculator for the computers and hence an improvement on the existing design</p>
    //                             </div>
    //                             <div class="item-icons">
    //                                 <div class="item-edit items">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>

    //                                 </div>
    //                                 <div class="item-delete items">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    //                                 </div>
    //                             </div>`
            
    //                 listed.append(li)
    //                 li.addEventListener('click', e=>{
    //                     let message = li.querySelector('p').textContent
    //                     console.log(message)
    //                     template('hello', message)
    //                 })
                    
    //         }
           
    //     })
    // } else {
    //     let li = document.createElement('li')
    //         li.innerHTML = `<div class="note-title">
    //                             <h3 class"title">Note</h3>
    //                             <p>${txt}</p>
    //                         </div>`
        
    //         ul.append(li)
    //         li.addEventListener('click', e=>{
    //             let message = li.querySelector('p').textContent
    //             // console.log(message)
    //             template('hello', message)
    //     })
        
    // }
    
    
}



