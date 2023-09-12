// use js to create a todolist app

// create a new list item when clicking on the "Add" button

// 获取列表元素
window.onload = function () {
    var content = document.getElementById("content");
    var list = content.querySelector("ul");

    // 初始化任务列表
    function initializeTaskList() {
        // 从LocalStorage中获取保存的任务
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // 清空TODO列表
        list.innerHTML = "";

        // 将任务添加到TODO列表
        tasks.forEach(function (taskText) {
            addTaskToList(taskText);
        });
    }

    // 添加任务到TODO列表
    function addTaskToList(taskText) {
        var newItem = document.createElement("li");
        var text = document.createElement("h4");
        text.innerText = taskText;
        newItem.appendChild(text);

        // 创建删除按钮
        var deleteButton = document.createElement("button");
        deleteButton.className = "deletebtn";
        deleteButton.innerText = "删";
        deleteButton.onclick = function () {
            // 在删除按钮点击时从列表中移除该项
            list.removeChild(newItem);
            // 从LocalStorage中删除该任务
            removeTaskFromLocalStorage(taskText);
        };

        // 将删除按钮添加到列表项后面
        newItem.appendChild(deleteButton);

        // 将列表项添加到列表中
        list.appendChild(newItem);
    }

    // 添加任务到LocalStorage
    function addTaskToLocalStorage(taskText) {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // 从LocalStorage中删除任务
    function removeTaskFromLocalStorage(taskText) {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        var updatedTasks = tasks.filter(function (task) {
            return task !== taskText;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // 表单提交事件
    var form = document.getElementById("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        var input = document.getElementById("input");
        var str = input.value.trim();

        if (str !== "") {
            // 检查列表中是否已经存在相同的内容
            var listItems = list.getElementsByTagName("h4");
            for (var i = 0; i < listItems.length; i++) {
                if (listItems[i].innerText === str) {
                    alert("该内容已存在于列表中");
                    return; // 如果内容已存在，不添加重复项并退出函数
                }
            }

            // 创建新的列表项
            addTaskToList(str);

            // 将任务添加到LocalStorage
            addTaskToLocalStorage(str);

            input.value = ""; // 清空输入框
        }
    }

    // 初始加载TODO列表
    initializeTaskList();
}




function getLocalStorgData() {
    var data = localStorage.getItem("data");
    if (data) {
        data = JSON.parse(data);
    } else {
        data = [];
    }
    return data;
}











