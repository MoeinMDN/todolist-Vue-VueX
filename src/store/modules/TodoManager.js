export default {
    namespaced: true,
    state: {
        todos: [
            {
                id: 1,
                title: 'title 1',
                description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has ',
                status: false
            },
            {
                id: 2,
                title: 'title 2',
                description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has ',
                status: true
            }],
        title: '',
        description: '',
        filter: 'option1',
        search: '',
    },
    mutations: {
        setTitle(state, newTitle) {
            state.title = newTitle
        },
        setDescription(state, newDescription) {
            state.description = newDescription
        },
        addItem(state) {
            state.todos.push({
                id: (state.todos.length) + 1,
                title: state.title,
                description: state.description,
                status: false
            })
        },
        deleteItem(state, id) {
            var index = state.todos.findIndex(function (o) {
                return o.id === id;
            })
            if (index !== -1) state.todos.splice(index, 1);
        },
        changeFilter(state, newFilter) {
            state.filter = newFilter;
        },
        changeStatus(state, id) {
            var index = state.todos.findIndex(function (o) {
                return o.id === id;
            })
            if (index !== -1) state.todos[index].status = !state.todos[index].status;
        },
        setSearch(state, newSearch) {
            state.search = newSearch
        }
    },
    actions: {},
    getters: {
        allTodos: state => state.todos.filter(item => {
            if (state.filter === 'option2') {
                return item.status == true
            }
            if (state.filter === 'option3') {
                return item.status == false
            } else {
                return item
            }
        }).filter(item => {
            return item.description.indexOf(state.search.toLowerCase()) > -1 || item.title.indexOf(state.search.toLowerCase()) > -1
        }),
        title: state => state.title,
        description: state => state.description,
        search: state => state.search
    },
}