const input = document.getElementById('input')
const add = document.querySelector('.btn-add')
const judul = document.getElementById('form-judul')

add.addEventListener('click', () =>{
    const newList = document.createElement('li')
    const newText = document.createTextNode(input.value)
    const newJudul = document.createTextNode(judul.value)
    if(input.value == '' || judul.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Waduhh...',
            text: 'Input tidak boleh kosong!',
          })
    }else{
        const card = document.createElement('div')
        const cardClass = card.classList.add('card')

        const cardHead = document.createElement('h5')
        const chClass = cardHead.classList.add('card-header')
        cardHead.appendChild(newJudul)

        const cardBody = document.createElement('div')
        const cbClass = cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        const ctxtClass = cardTitle.classList.add('card-title')

        const cardText = document.createElement('p')
        const ctClass = cardText.classList.add('card-text')
        cardText.appendChild(newText)

        const btnDelete = document.createElement('button')
        const bdClass = btnDelete.classList.add('btn')
        const bdDanger = btnDelete.classList.add('btn-danger')

        const bdDeleteTxt = document.createTextNode('Delete')
        btnDelete.appendChild(bdDeleteTxt)

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(btnDelete)

        card.appendChild(cardHead)
        card.appendChild(cardBody)

        newList.appendChild(card)

        const uList = document.querySelector('.sign ul')
        uList.appendChild(newList)

        function deleteListItem() {
            // Menggunakan "this" untuk mengakses tombol "Delete" yang diklik
            const listItem = this.parentElement.parentElement;
            const ulList = listItem.parentElement;
            
            // Menghapus item daftar dari ul
            ulList.removeChild(listItem);
        }
        
        // Menambahkan event listener untuk tombol "Delete" pada setiap item daftar
        const deleteButtons = document.querySelectorAll('.btn-danger');
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', deleteListItem);
        });
    }
})






