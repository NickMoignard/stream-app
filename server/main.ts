import MediaServersWrapper from "./mediaServersWrapper"
import ffmpeg from "ffmpeg-static"
import ffprobe from "ffprobe-static"
import process from "process"
import dotenv from "dotenv"
// import rtmpToHLS from "./ffmpeg/rtmpToHLS"

// should move higher in the build order
dotenv.config()

const env = process.env

env.FFMPEG_PATH = ffmpeg
env.FFPROBE_PATH = ffprobe.path

const servers = new MediaServersWrapper()

servers.start()
