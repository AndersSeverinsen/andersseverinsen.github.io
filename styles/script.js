function show(n) {
    let navs = ['personal', 'school', 'professional'];
    navs.forEach((nav) => {
        let idnav = document.getElementById(nav+'nav');
        let idelem = document.getElementById(nav);
        if (nav === n) {
            idelem.style.display = 'block';
            idnav.classList.add('active');
        } else {
            idelem.style.display = 'none';
            idnav.classList.remove('active');
        }
    })
}