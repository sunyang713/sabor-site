// there must be a better way to do this

export default class MediaItem {
  constructor({ title, description, createdTime, thumbnail, type, src }) {
    this.title = title
    this.description = description
    this.createdTime = createdTime
    this.thumbnail = thumbnail
    this.type = type
    this.src = src

    this.TYPE_IMAGE = 'IMAGE'
    this.TYPE_VIDEO = 'VIDEO'
  }
}

export class ImageMediaItem extends MediaItem {
  constructor(data) {
    super(data)
    this.type = this.TYPE_IMAGE
  }
}

export class VideoMediaItem extends MediaItem {
  constructor(data) {
    super(data)
    this.type = this.TYPE_VIDEO
  }
}

