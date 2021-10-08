const TaskValue = document.getElementsByClassName('task_value')[0];
const TaskSubmit = document.getElementsByClassName('task_submit')[0];
const TaskList = document.getElementsByClassName('task_list')[0];

// 追加
    const addTask = (Task) => {
        // 追加・表示
        const listItem = document.createElement('li');
        const showItem = TaskList.appendChild(listItem);
        showItem.innerHTML = Task;

        // 削除ボタン
        const DelateButton = document.createElement('button');
        DelateButton.innerHTML = 'Delete';
        listItem.appendChild(DelateButton);

        // 削除のイベント
        DelateButton.addEventListener('click', evt => {
            evt.preventDefault();
            DelateTasks(DelateButton);
        });
    };

// 削除
    const DelateTasks = (DelateButton) =>{
        const choseTasks = DelateButton.closest('li');
        TaskList.removeChild(choseTasks);
    };

    TaskSubmit.addEventListener('click', evt => {
        evt.preventDefault();
        const Task = TaskValue.value;
        addTask(Task);
        TaskValue.value = '';
    });
