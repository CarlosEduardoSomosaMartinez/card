const $links=document.getElementById('links')
const $name=document.querySelector('h1')
const $footer=document.querySelector('.footer')
const $img=document.getElementById('img')
const $description=document.getElementById('description')

const data = 
{
    name: "Carlos Eduardo Somosa Martinez",
    nickname: "Neo",
    description: "Quiero convertirme en un Sr. tanto en front como back y poder ser versatil con cualquier herramienta de programacion ",
    avatar: "https://avatars.githubusercontent.com/u/85375369?s=120&v=4",
    
    links: 
    [

        {
            name: "github",
            url: "https://github.com/",
            color: "slate",
            username: "",
        },
        {
            name: "Linikedin",
            url: "https://mx.linkedin.com/",
            color: "blue",
            username: "",
          },
      {
        name: "Discord",
        url: "https://discord.com/",
        color: "purple",
        emoji: "📖",
      },
      {
        name: "twitch",
        url: "https://www.twitch.tv/",
        color: "green",
        username: "",
      },

    ],
    footer: "...................me gusta hacer dos cosas masticar chicles y programar................... Y HOY NO TENGO CHICLES!!!!",
};

const main=()=>{
    let name =document.createTextNode(data?.name)
    let img =document.createElement('img')
    let description =document.createTextNode(data?.description)
    img.src=data?.avatar
    let footer=document.createTextNode(data?.footer)
    let links=data?.links?.map((red)=>{
        return `<div class="bg-${red?.color}-200 px-4 py-5 w-full flex justify-between">
                    <a  class="text-sm font-bold text-${red?.color}-600 text-center hover:text-${red?.color}-800 cursor-pointer" href="${red?.url}" target="_blank">
                     ${red?.name}
                    </a>
                </div>`
    }).join('');
    let newItem=document.createElement("section")
    newItem.innerHTML=links;
    $links.appendChild(newItem)
    $name.appendChild(name)
    $img.appendChild(img)
    $description.appendChild(description)
    $footer.appendChild(footer)
}
main()