/*main.js*/
//import 명칭 from ".참조할 js파일";
//import {불러오고자하는 핸들러명} from ".참조할 js파일";
//import * as md from "./module.js";
import { module, area } from "../../node/moduletest/module.js/index.js";
import sq, { circle } from "./moduleOne.js";
module("test");
area(10, 20);
sq();
circle();
