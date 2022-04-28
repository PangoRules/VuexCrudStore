import { createStore } from 'vuex'

export default createStore({
    state: {
        /**@type {tarea[]} Array with the tasks added*/
        tareas: [],
        /**@type {object.<>} Object with the task to be added on the array*/
        tarea: {
            id: '',
            nombre: '',
            categorias: [],
            estado: '',
            numero: 0
        }
    },
    /**Mutations are the actual logic that modifies things in the store */
    mutations: {
        /**
         * 
         * @param {object} state - Object contains all your application level state and serves as the "single source of truth.".
         * @param {object.<Tarea>} payload - Object with the data to add a new task on to the array.
         */
        setTarea(state, payload){
            state.tareas.push(payload);
            localStorage.setItem('tareas', JSON.stringify(state.tareas));
        },

        /**
         * Function in charge of deleting a task from the array.
         * @param {object} state - Object contains all your application level state and serves as the "single source of truth.".
         * @param {string} payload - Id of the task to erase from the array
         */
        deleteTarea(state, payload){
            state.tareas = state.tareas.filter(tarea => tarea.id !== payload);
            localStorage.setItem('tareas', JSON.stringify(state.tareas));
        },

        /**
         * Function in charge of editing a task from the array.
         * @param {object} state - Object contains all your application level state and serves as the "single source of truth.".
         * @param {object.<tarea>} payload - Task to edit and its new data.
         */
        editTarea(state, payload){
            // console.log("🚀 ~ file: index.js ~ line 42 ~ editTarea ~ payload", payload);
            state.tareas = state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea);
            localStorage.setItem('tareas', JSON.stringify(state.tareas));
        },

        /**
         * Function in charge of retrieving tasks from local storage.
         * @param {object} state - Object contains all your application level state and serves as the "single source of truth.".
         * @param {array.<tarea>} payload - Tasks obtained form local storage.
         */
        getTareasLocalStorage(state, payload){
            state.tareas = payload;
        }
    },
    /**Actions are called from the components in vue (views)*/
    actions: {
        /**
         * Función encargada de agregar una nueva tarea al array.
         * @param {object.<Tarea>} tarea  - Task to add on the array of tasks.
         */
        setTarea({ commit }, tarea){
            commit('setTarea', tarea);
        },

        /**
         * Función encargada de eliminar una tarea especifica del array mediante su identificador.
         * @param {string} id - Identificador de la tarea a eliminar del arreglo.
         */
        deleteTarea({ commit }, id){
            commit('deleteTarea', id);
        },
        
        /**
         * Función encargada de editar una tarea especifica del array.
         * @param {object.<tarea>} tarea - Datos editados de la tarea seleccionada.
         */
        editTarea({ commit }, tarea){
            commit('editTarea', tarea);
        },

        /**
         * Function in charge of loading tasks from local storage in case there are existing ones.
         */
        getTareasLocalStorage({ commit }){
            if(localStorage.getItem('tareas')){
                let tareas = JSON.parse(localStorage.getItem('tareas'));
                commit('getTareasLocalStorage', tareas);
                return;
            }

            localStorage.setItem('tareas', JSON.stringify([]) );
        }
    },
    modules: {
    }
})
