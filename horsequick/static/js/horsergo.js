$.ajaxSetup({
    data:{csrfmiddlewaretoken:'{{csrf_token}}'}

});


    function interface_add() {
    	var input_field_list = new Array() //入参数组
		var input_need_list = new Array() //入参是否必需数组
		var input_demo_list = new Array() //入场实例数组

    	$(".params_input").each(function () {
        	input_field_list.push($(this).val())
		})

		$(".params_need").each(function () {
        	input_need_list.push($(this).val())
		})

		$(".params_demo").each(function () {
        	input_demo_list.push($(this).val())
		})

        var interface_name = $("#interface_name").val()
        var interface_type = $("#interface_type").val()
        var interface_url = $("#interface_url").val()
		var interface_mock = $("#interface_mock").val()
		var belong_subsys = $("#belong_subsys").val()
		var belong_category = $("#belong_category").val()
        var belong_git_base = $("#belong_git_base").val()
        var belong_svn_base = $("#belong_svn_base").val()


        console.log('---------------add interface----------------')
		
		$.ajax({
			
			type:"post",
			url:"/interface_add/",
			data:JSON.stringify({"interface_name":interface_name,"interface_type":interface_type,"input_field_list":input_field_list,
			"input_need_list":input_need_list,"input_demo_list":input_demo_list,"interface_url":interface_url,"belong_category":belong_category,
			"belong_subsys":belong_subsys,"belong_git_base":belong_git_base,"belong_svn_base":belong_svn_base,"interface_mock":interface_mock}),
			cache:false,
			async:false,
			dataType:"json",
			
			success:function(resp){
				if(resp.code ==="000000"){
					alert(resp.msg);
				}
				
				else if(resp.code==="000001"){
					alert(resp.msg);
				}
				
				else{
					alert(resp.msg);
				}
				
			},
			
			error: function(){
				
				alert("出错了");
			}
		});	

    }

    function domain_add() {
		var domain_name = $("#domain_name").val()
		var domain_brief = $("#domain_brief").val()

		$.ajax({

			type: "post",
			url: "/domain_add/",
			data: JSON.stringify({"domain_name": domain_name, "domain_brief": domain_brief}),
			cache: false,
			async: false,
			dataType: "json",
			success: function (resp) {
				if (resp.code === "000000") {
					alert(resp.msg);
				} else if (resp.code === "000001") {
					alert(resp.msg);
				} else {
					alert(resp.msg);
				}

			},

			error: function () {

				alert("出错了");
			}


		});
	}


	function horser_login() {
		var user_name = $("#user_name").val()
		var password = $("#password").val()

		$.ajax({

			type: "post",
			url: "/login/",
			data: JSON.stringify({"user_name": user_name, "password": password}),
			cache: false,
			async: false,
			dataType: "json",
			success: function (resp) {
				if (resp.code === "000000") {
					alert(resp.msg);
					window.location.href = "/"
				} else if (resp.code === "000001") {
					alert(resp.msg);
				}
				else if (resp.code === "000002") {
					alert(resp.msg);
				}
				else {
					alert(resp.msg);
				}

			},

			error: function () {

				alert("出错了");
			}


		});
	}

    function add_input_field(obj) {



    	html = '<div class="form-inline">' +
			' <input id="input_field" name="interface_name" placeholder="参数名称" class="form-control params_input">' +
			'<select id="interface_name" name="interface_name"  class="form-control params_need"><option>必需</option><option>非必需</option></select>' +
			'<textarea class="form-control params_demo" style="height:34px;width: 55%" placeholder="参数实例"></textarea>' +'<button>删除</button>'+


			'</div>'

		obj.insertAdjacentHTML("beforeBegin", html)


	}


	function select_domain(obj) {

		var domain_name = $(obj).text();

		$.ajax({
			type: "post",
			url: "/select_domain/",
			data: JSON.stringify({"domain_name": domain_name}),
			cache: false,
			async: false,
			dataType: "json",
			success: function (resp) {
				if (resp.code === "000000") {
					window.location.href = "/"
				}
			},
			error: function () {
				alert("出错了");
			}
		});

	}




function edit_domain() {

		var domain_name = $("#domain_name_edit").val()
		var domain_brief = $("#domain_brief_edit").val()

		$.ajax({
			type: "post",
			url: "/edit_domain/",
			data: JSON.stringify({"domain_name": domain_name,"domain_brief":domain_brief}),
			cache: false,
			async: false,
			dataType: "json",
			success: function (resp) {
				if (resp.code === "000000") {
					alert(resp.msg);
					window.location.reload()
				} else if (resp.code === "000001") {
					alert(resp.msg);
				}

			},
			error: function () {
				alert("出错了");
			}
		});

}