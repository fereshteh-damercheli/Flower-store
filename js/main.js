//import pages
import Home from"./Home.js";
import Products from"./Products.js";
import About from"./About.js";
import Contact from"./Contact.js";
import signIn from"./signIn.js";



//make menu hamburger
$(`section.menu>div.options>div.hamburger`).click(function(){
    {
        $(`section.menu>div.moreOptions`).slideToggle(500)
    }

})

//make spa
const navTo=(url)=>{
    history.pushState(null,null,url)
    Router()
}

const Router=()=>{
    const routes=[
        {path:"/",view:Home},
        {path:"/products",view:Products},
        {path:"/about",view:About},
        {path:"/contact",view:Contact},
        {path:"/sign-in",view:signIn},
        {path:"/404",view:()=>{}}

    ]
    const matchRoutes=routes.map(function(elem){
        return{
            route:elem,
            isMatch:elem.path===location.pathname
        }
    })
    let match=matchRoutes.find(function(elem){
        return elem.isMatch
    })
    if(!match){
        match={
            route:routes[routes.length-1],
            isMatch:true
        }
    }
document.getElementById("root").innerHTML=match.route.view()
}
window.addEventListener("popstate",Router)
document.addEventListener("DOMContentLoaded",function(){
    document.body.addEventListener("click",(event)=>{
        if(event.target.matches(`[data-link]`)){
            event.preventDefault()
            navTo(event.target.href)
        }
    })
    Router()
})







