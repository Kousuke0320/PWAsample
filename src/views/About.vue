<template>
<div class="app">
<div id="map">
<GmapMap :center="center" :zoom="zoom" style="width: 100vw; height: 100vh;">
<GmapMarker v-for="(m,id) in marker_items"
:position="m.position"
:title="m.title"
:clickable="true" :draggable="false" :key="id"></GmapMarker>
</GmapMap>
</div>
</div>
</template>
<script>
export default {
data () {
return {
center: {lat: 35.71, lng: 139.72},
zoom: 14,
marker_items: [
{position: {lat: 35.71, lng: 139.72}, title: 'marker_1'},
{position: {lat: 35.72, lng: 139.73}, title: 'marker_2'},
{position: {lat: 35.70, lng: 139.71}, title: 'marker_3'},
{position: {lat: 35.71, lng: 139.70}, title: 'marker_4'}
]
}
}
}
</script>
<style scoped>

</style>