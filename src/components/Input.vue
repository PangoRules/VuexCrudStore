<template>
    <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="newTarea.nombre">

    <!-- Programming languages filled dinamically from the array in data part -->
    <div class="form-check form-check-inline" v-for="(language,index) in progLanguages" :key="index">
        <input type="checkbox" :id="`check-${index}`" class="form-check-input" v-model="newTarea.categorias" :value="language">
        <label :for="`check-${index}`" class="form-check-label">{{language}}</label>
    </div>

    <!-- Urgent, Relax Checkboxes -->
    <div class="mt-2">
        <div class="form-check form-check-inline">
            <input type="radio" id="radio-1" class="form-check-input" value="urgente" v-model="newTarea.estado">
            <label for="radio-1" class="form-check-label">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
            <input type="radio" id="radio-2" class="form-check-input" value="relax" v-model="newTarea.estado">
            <label for="radio-2" class="form-check-label">Relax</label>
        </div>
    </div>

    <!-- Number input -->
    <div class="mt-2">
        <input type="number" class="form-control" v-model.number="newTarea.numero">
    </div>

    <div class="form-inline mt-2 d-flex justify-content-center">
        <button class="btn btn-dark mr-2" type="button" :disabled="bloquear" @click="process">Procesar</button>
        <button class="btn btn-danger" type="button" v-if="isedit" @click="cancelEdit">Cancelar</button>
    </div>
    

</template>

<script>
export default {
    emits: ['cancelEdit', 'process'],

    props:{
        tarea: Object,
        isedit: Boolean,
    },

    data(){
        return{
            /**@type {String[]} - Array with the programming languages available for the form*/
            progLanguages:[
                "JavaScript", "Node.js", "React.js", "Vue.js"
            ],

            newTarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
        }
    },

    computed: {
        bloquear(){
            return this.newTarea.nombre.trim() === "" ? true : false
        }
    },

    methods:{
        cancelEdit(){
            this.$emit('cancelEdit');
        },

        process(){
            this.$emit('process', this.newTarea);
        }
    },

    watch:{
        tarea(){
            this.newTarea = Object.assign({},this.tarea);
        }
    }
}
</script>