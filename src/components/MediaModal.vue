<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="media-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div v-if="mediaItem" class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="media-modal-label">{{ mediaItem.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="media img-fluid">
            <div v-if="mediaItem.type === mediaItem.TYPE_VIDEO">
              <video :src="mediaItem.src" :poster="mediaItem.thumbnail" ref="video" controls></video>
            </div>
            <div v-else-if="mediaItem.type === mediaItem.TYPE_IMAGE">
              <img :src="mediaItem.src">
            </div>
          </div>
          <hr class="my-2">
          <p>{{ mediaItem.description }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="onCloseModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'mediaItem'
  ],
  methods: {
    onCloseModal(event) {
      if (this.$refs.video)
        this.$refs.video.pause()
    }
  }
}
</script>

<style scoped>
.modal .media {
  object-fit: cover;
}
</style>
