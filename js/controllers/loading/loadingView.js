import { div, span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";


export class LoadingView extends BaseView{
    constructor(parent, controller){
        super(parent, controller);
        this.className = "loadingView"
        let spinner = div ({className:'loadingView-spinner'},this)
        span({innerHTML:'getting the last details ready'},this)

        gsap.to(spinner,{rotation:360,duration:4,repeat:-1})
    }
}

customElements.define('loading-view',LoadingView);