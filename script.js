let btn = document.querySelector('.btn');
btn.onclick = () => {
    btn.classList.toggle('active');
    let sidebar = document.querySelector('.sidebar');
    if(sidebar.classList.contains('hide')) {
        sidebar.classList.add('show');
        sidebar.classList.remove('hide');
    }else {
        sidebar.classList.add('hide');
        sidebar.classList.remove('show');
    }
}