
父组件向子组件传递数据，是通过:Xxx="数据" ,子组件接收方是通过 props:{ 数据 : null }

父组件调用子组件(即组件的)的方法 showForm(),也就是 组件的 methods.showForm();其中的 goodsForm 是上面定义的 ref="goodsForm"

流程:

	[父组件]传数据：
	<Preference :preferListData="listPreferData"></Preference>
	
	[子组件]接数据:
	props : {
		preferListData : ''
	},
	
	[子组件]显示数据:
	{{preferListData.msg || ''}}
	