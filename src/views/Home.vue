<template>
    <h1 class="my-5">Formularios con Vue.js</h1>
    <form @submit.prevent="procesarFormulario">
        <input-component :tarea="tarea" :isedit="isEdit" @cancelEdit="cleanData" @process="procesarFormulario"/>
    </form>
    <hr>
    <p>
        <lista-tareas-component @setEditTask="setEditTask"/>
    </p>
</template>

<script>
import InputComponent from '../components/Input.vue';
import ListaTareasComponent from '../components/ListaTareas.vue';
import { mapActions } from 'vuex';
const shortid = require('shortid');

export default {
    name: 'Home',

    components: {
        InputComponent, ListaTareasComponent
    },

    data() {
        return {
            /**@type {object} - Objeto con los datos de la nueva tarea a agregar. */
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            /**@type {boolean} - Boolean in charge of hearing if a task is currently beign edited. */
            isEdit: false,
        }
    },

    methods: {
        /**Mapea las acciones que pueden ser llamadas desde la tienda mediante el vuex */
        ...mapActions(['setTarea', 'editTarea']),

        /**Metodo encargado de procesar el formulario previamente llenado */
        async procesarFormulario(newTask){
            /**Validations */
            if(newTask.nombre.trim() === ""){
                alert('Campo vacío');
                return
            }
            /**Generating shortid */
            newTask.id =  this.isEdit ? newTask.id : shortid.generate();
            /**Saving with vuex store */
            this.isEdit ? await this.editTarea(newTask) : await this.setTarea(newTask);

            /**Cleaning data */
            this.cleanData();
        },

        /**Sets the task to edit */
        setEditTask(task){
            this.tarea = task;
            this.isEdit = true;
        },

        /**Function in charge of cleaning data from inputs */
        cleanData(){
            /**Cleaning data */
            this.tarea = {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
            this.isEdit = false;
        }
    },
}
</script>
