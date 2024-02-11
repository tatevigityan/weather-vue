<script lang="ts">
import axios from 'axios';
export default {
    data() {
        return {
            city: "",
            error: '',
            info: null
        }
    },
    computed: {
        cityName() {
            return "«" + this.city + "»";
        },
        showTemp() {
            return "Тeмпература: " + this.info.main.temp;
        },
        showFeelsLike() {
            return "Ощущается как: " + this.info.main.feels_like;
        },
        showMinTemp() {
            return "Минимальная температура: " + this.info.main.temp_min;
        },
        showMaxTemp() {
            return "Максимальная температура: " + this.info.main.temp_max;
        }
    },
    methods: {
        getWeather() {
            if (this.city.trim().length < 2) {
                this.error = "Нужно название более одного символа :)";
                return false;
            }
            this.error = '';

            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=5514e47cb23a489f63bf02d6e4a89201`)
                .then(res => (this.info = res.data))
        }
    }
}
</script>

<template>
    <p>Узнать погоду в {{ city == "" ? "вашем городе" : cityName }}</p>
    <input type="text" v-model="city" placeholder="Введите город">
    <button v-if="city != ''" @click="getWeather" data-cy="submit">Получить погоду</button>
    <button disabled v-else>Введите название города</button>
    <p class="error">{{ error }}</p>
    <div v-if="info != null" data-cy="info-block">
        <p>{{ showTemp }}</p>
        <p>{{ showFeelsLike }}</p>
        <p>{{ showMinTemp }}</p>
        <p>{{ showMaxTemp }}</p>
    </div>
</template>

<style>
@import './Content.css';
</style>
