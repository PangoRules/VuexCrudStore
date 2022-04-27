<template>
    <h1 class="my-5">Formularios con Vue.js</h1>
    <form @submit.prevent="procesarFormulario">
        <input-component :tarea="tarea" />
    </form>
    <hr>
    <p>
        <lista-tareas-component />
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
            /**@type {Object} - Objeto con los datos de la nueva tarea a agregar */
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        }
    },

    methods: {
        /**Mapea las acciones que pueden ser llamadas desde la tienda mediante el vuex */
        ...mapActions(['setTarea']),

        /**Metodo encargado de procesar el formulario previamente llenado */
        async procesarFormulario(){
            /**Validations */
            if(this.tarea.nombre.trim() === ""){
                alert('Campo vacío');
                return
            }
            
            /**Generating shortid */
            this.tarea.id = shortid.generate();
            
            /**Saving with vuex store */
            await this.setTarea(this.tarea);

            /**Cleaning data */
            this.tarea = {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        }
    },
}
</script>
