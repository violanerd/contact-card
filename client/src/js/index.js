import "./form";
import "./submit";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo2.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import { getDb, initdb, postDb } from "./databse";
import "../css/index.css"

window.addEventListener('load', function(){
    initdb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
})


