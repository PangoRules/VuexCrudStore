<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categorias</th>
                <th scope="col">Estado</th>
                <th scope="col">Número</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody>
            <!-- If empty -->
            <tr v-if="tareas.length===0" class="text-center">
                <td colspan="6">No tasks added.</td>
            </tr>
            <tr v-else v-for="(tarea,index) in tareas" :key="tarea.id">
                <th scope="row">{{index+1}}</th>
                <td>{{tarea.nombre}}</td>
                <td>{{tarea.categorias.join(', ')}}</td>
                <td>{{tarea.estado}}</td>
                <td>{{tarea.numero}}</td>
                <td>
                    <button type="button" class="btn btn-outline-warning text-dark mr-2" @click="setEditTask(tarea)">Editar</button>
                    <button type="button" class="btn btn-danger" @click="removeTask(tarea.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['tareas']),
    },

    methods:{
        /**Mapea las acciones que pueden ser llamadas desde la tienda mediante el vuex */
        ...mapActions(['deleteTarea']),

        /**Function in charge of deleting a task from the store, using id
         * @param {string} id - Id of the task to remove from the vuex store
         */
        removeTask(id){
            this.deleteTarea(id);
        },

        /**Evento emitido al componente padre para editar una tarea actual */
        setEditTask(task){
            this.$emit('setEditTask', task);
        }
    }
}
</script>