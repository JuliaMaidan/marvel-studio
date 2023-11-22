import axios from "axios";
import CryptoJS from "crypto-js";

const PUBLIC_KEY = "cc199306e90314696ed4a7ee174e90fd";
const PRIVATE_KEY = "39c73db8fc8da42885c00f9566babf54826190ff";
const ts = Date.now().toString();
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=cc199306e90314696ed4a7ee174e90fd&hash=${hash}`;
const url = `http://gateway.marvel.com/v1/public/characters/`;
