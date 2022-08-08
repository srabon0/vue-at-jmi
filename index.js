new Vue({
    el:"#app",
    data:{
        title: "Shape Crateor",
        textIcon:"",
    },
    methods:{
        inputChange:(e)=>{
            this.textIcon= e.target.value
        }
    },
    computed:{
        shapCreate : function(){
            return jdenticon.toSvg(this.textIcon, 200);
        }
    },
    template:`
    <div>
            <h1> {{ title }} </h1>
            <h2> Shape Creator </h2>
            <input v-on:input="inputChange" v-model="textIcon">
            <div>
                <span v-html="shapCreate"></span>
            </div>
        </div>
    `
})