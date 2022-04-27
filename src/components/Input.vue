<template>
    <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">

    <!-- Programming languages filled dinamically from the array in data part -->
    <div class="form-check form-check-inline" v-for="(language,index) in progLanguages" :key="index">
        <input type="checkbox" :id="`check-${index}`" class="form-check-input" v-model="tarea.categorias" :value="language">
        <label :for="`check-${index}`" class="form-check-label">{{language}}</label>
    </div>

    <!-- Urgent, Relax Checkboxes -->
    <div class="mt-2">
        <div class="form-check form-check-inline">
            <input type="radio" id="radio-1" class="form-check-input" value="urgente" v-model="tarea.estado">
            <label for="radio-1" class="form-check-label">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
            <input type="radio" id="radio-2" class="form-check-input" value="relax" v-model="tarea.estado">
            <label for="radio-2" class="form-check-label">Relax</label>
        </div>
    </div>

    <!-- Number input -->
    <div class="mt-2">
        <input type="number" class="form-control" v-model.number="tarea.numero">
    </div>

    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
</template>

<script>
export default {
    props:{
        tarea: Object
    },

    data(){
        return{
            /**@type {String[]} - Array with the programming languages available for the form*/
            progLanguages:[
                "JavaScript", "Node.js", "React.js", "Vue.js"
            ]
        }
    },

    computed: {
        bloquear(){
            return this.tarea.nombre.trim() === "" ? true : false
        }
    }
}
</script>