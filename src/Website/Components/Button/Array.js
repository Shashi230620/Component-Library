import basicbutton from"../../assests/basicbutton.png";
import iconbutton from"../../assests/iconbutton.png";
import toogle from "../../assests/Switchbutton.png";
import borderbutton from"../../assests/Borderbutton.png";
import roundbutton from "../../assests/50pxbutton.png";

const details = [
    {
        btn_heading: "BASIC",
        btn_para: "Basic buttons are those provided by HTML itself using the button tag, which have no animations or styling. To create more appealing buttons, you can style them with CSS or use libraries like TailwindCSS and Bootstrap.",
        btn_image: basicbutton 
    },
    {
        btn_heading: "ICONS",
        btn_para: "An icon button features only an icon with no visible text label. Icon buttons are used to display actions compactly, especially where text may be less practical or necessary.",
        btn_image:iconbutton 
    },
    {
        btn_heading: "TOGGLE",
        btn_para: "A toggle button is a UI component that allows users to switch between two or more states. Toggle buttons enable or disable features, show or hide elements, or provide filtered views of data.",
        btn_image:toogle 
    },
    {
        btn_heading: "BORDER",
        btn_para: "Borders are key elements in web design, used to draw attention to or separate content. There are several border styles for buttons in CSS, including solid, dashed, dotted, double, groove, ridge, inset, and outset.",
        btn_image:borderbutton 
    },
    {
        btn_heading: "ROUND",
        btn_para: "Round buttons have a border radius greater than zero, giving them a smoother shape and a less formal look. They enhance user experience and contribute to a cleaner, more polished interface.",
        btn_image:roundbutton 
    }
];

export default details;
