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
    }
})