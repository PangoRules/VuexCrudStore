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
        },

        /**
         * Function in charge of deleting a task from the array.
         * @param {object} state - Object contains all your application level state and serves as the "single source of truth.".
         * @param {string} payload - Id of the task to erase from the array
         */
        deleteTarea(state, payload){
            // state.tareas = state.tareas.filter(tarea => tarea.id !== payload);
            console.log("🚀 ~ file: index.js ~ line 34 ~ deleteTarea ~ state.tareas.filter(tarea => tarea.id !== payload);", state.tareas.filter(tarea => tarea.id !== payload));
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
        }
    },
    modules: {
    }
})
