import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;
const nodes = [
    {
        name:'div',
        attrs:{
            class:'div_class',
            style:'line-height: 60px; color: red;'
        },
        children:[
            {
                type:'text',
                text:'You never know what you\'re gonna get.'
            }
        ]
    }
];
const nodeSnip = `Page({
  data: {
    nodes: ${JSON.stringify(nodes,null,2)}
  }
})
`;
OnekitPage({
    onShareAppMessage:function(){
        return {
        title:'rich-text',
        path:'page/component/pages/rich-text/rich-text'
    };
    },
    data:{
        htmlSnip:htmlSnip,
        nodeSnip:nodeSnip,
        renderedByHtml:false,
        renderedByNode:false,
        nodes:nodes
    },
    renderHtml:function(){
        this.setData({
        renderedByHtml:true
    });
    },
    renderNode:function(){
        this.setData({
        renderedByNode:true
    });
    },
    enterCode:function(e){
        console.log(e.detail.value);
        this.setData({
        htmlSnip:e.detail.value
    });
    }
});
