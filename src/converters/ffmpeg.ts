import { exec } from "node:child_process";

// This could be done dynamically by running `ffmpeg -formats` and parsing the output
export const properties = {
  from: {
    muxer: [
      "264",
      "265",
      "302",
      "3dostr",
      "3g2",
      "3gp",
      "4xm",
      "669",
      "722",
      "aa",
      "aa3",
      "aac",
      "aax",
      "ac3",
      "ace",
      "acm",
      "act",
      "adf",
      "adp",
      "ads",
      "adx",
      "aea",
      "afc",
      "aiff",
      "aix",
      "al",
      "alaw",
      "alias_pix",
      "alp",
      "alsa",
      "amf",
      "amr",
      "amrnb",
      "amrwb",
      "ams",
      "anm",
      "ans",
      "apc",
      "ape",
      "apl",
      "apm",
      "apng",
      "aptx",
      "aptxhd",
      "aptx_hd",
      "aqt",
      "aqtitle",
      "argo_asf",
      "argo_brp",
      "art",
      "asc",
      "asf",
      "asf_o",
      "ass",
      "ast",
      "au",
      "av1",
      "avc",
      "avi",
      "avr",
      "avs",
      "avs2",
      "avs3",
      "bcstm",
      "bethsoftvid",
      "bfi",
      "bfstm",
      "bin",
      "bink",
      "binka",
      "bit",
      "bmp_pipe",
      "bmv",
      "boa",
      "brender_pix",
      "brstm",
      "c2",
      "c93",
      "caf",
      "cavsvideo",
      "cdata",
      "cdg",
      "cdxl",
      "cgi",
      "cif",
      "cine",
      "codec2",
      "codec2raw",
      "concat",
      "cri_pipe",
      "dash",
      "dat",
      "data",
      "daud",
      "dav",
      "dbm",
      "dcstr",
      "dds_pipe",
      "derf",
      "dfa",
      "dhav",
      "dif",
      "digi",
      "dirac",
      "diz",
      "dmf",
      "dnxhd",
      "dpx_pipe",
      "dsf",
      "dsicin",
      "dsm",
      "dss",
      "dtk",
      "dtm",
      "dts",
      "dtshd",
      "dv",
      "dvbsub",
      "dvbtxt",
      "dxa",
      "ea",
      "eac3",
      "ea_cdata",
      "epaf",
      "exr_pipe",
      "f32be",
      "f32le",
      "f4v",
      "f64be",
      "f64le",
      "fap",
      "far",
      "fbdev",
      "ffmetadata",
      "filmstrip",
      "film_cpk",
      "fits",
      "flac",
      "flic",
      "flm",
      "flv",
      "frm",
      "fsb",
      "fwse",
      "g722",
      "g723_1",
      "g726",
      "g726le",
      "g729",
      "gdm",
      "gdv",
      "genh",
      "gif",
      "gif_pipe",
      "gsm",
      "gxf",
      "h261",
      "h263",
      "h264",
      "h265",
      "h26l",
      "hca",
      "hcom",
      "hevc",
      "hls",
      "hnm",
      "ice",
      "ico",
      "idcin",
      "idf",
      "idx",
      "iec61883",
      "iff",
      "ifv",
      "ilbc",
      "image2",
      "image2pipe",
      "imf",
      "imx",
      "ingenient",
      "ipmovie",
      "ipu",
      "ircam",
      "ism",
      "isma",
      "ismv",
      "iss",
      "it",
      "iv8",
      "ivf",
      "ivr",
      "j2b",
      "j2k",
      "j2k_pipe",
      "jack",
      "jacosub",
      "jpegls_pipe",
      "jpeg_pipe",
      "jv",
      "kmsgrab",
      "kux",
      "kvag",
      "lavfi",
      "libcdio",
      "libdc1394",
      "libgme",
      "libopenmpt",
      "live_flv",
      "lmlm4",
      "loas",
      "lrc",
      "luodat",
      "lvf",
      "lxf",
      "m15",
      "m2a",
      "m4a",
      "m4b",
      "m4v",
      "mac",
      "matroska",
      "mca",
      "mcc",
      "mdl",
      "med",
      "mgsts",
      "microdvd",
      "mj2",
      "mjpeg",
      "mjpeg_2000",
      "mjpg",
      "mk3d",
      "mka",
      "mks",
      "mkv",
      "mlp",
      "mlv",
      "mm",
      "mmcmp",
      "mmf",
      "mms",
      "mo3",
      "mod",
      "mods",
      "moflex",
      "mov",
      "mp2",
      "mp3",
      "mp4",
      "mpa",
      "mpc",
      "mpc8",
      "mpeg",
      "mpegts",
      "mpegtsraw",
      "mpegvideo",
      "mpjpeg",
      "mpl2",
      "mpo",
      "mpsub",
      "mptm",
      "msbc",
      "msf",
      "msnwctcp",
      "msp",
      "mt2",
      "mtaf",
      "mtm",
      "mtv",
      "mulaw",
      "musx",
      "mv",
      "mvi",
      "mxf",
      "mxg",
      "nc",
      "nfo",
      "nist",
      "nistsphere",
      "nsp",
      "nst",
      "nsv",
      "nut",
      "nuv",
      "obu",
      "ogg",
      "okt",
      "oma",
      "omg",
      "openal",
      "oss",
      "paf",
      "pam_pipe",
      "pbm_pipe",
      "pcx_pipe",
      "pgmyuv_pipe",
      "pgm_pipe",
      "pgx_pipe",
      "photocd_pipe",
      "pictor_pipe",
      "pjs",
      "plm",
      "pmp",
      "png_pipe",
      "ppm",
      "ppm_pipe",
      "pp_bnk",
      "psd_pipe",
      "psm",
      "psp",
      "psxstr",
      "pt36",
      "ptm",
      "pulse",
      "pva",
      "pvf",
      "qcif",
      "qcp",
      "qdraw_pipe",
      "r3d",
      "rawvideo",
      "rco",
      "rcv",
      "realtext",
      "redspark",
      "rgb",
      "rl2",
      "rm",
      "roq",
      "rpl",
      "rsd",
      "rso",
      "rt",
      "rtp",
      "rtsp",
      "s16be",
      "s16le",
      "s24be",
      "s24le",
      "s32be",
      "s32le",
      "s337m",
      "s3m",
      "s8",
      "sami",
      "sap",
      "sb",
      "sbc",
      "sbg",
      "scc",
      "sdp",
      "sdr2",
      "sds",
      "sdx",
      "ser",
      "sf",
      "sfx",
      "sfx2",
      "sga",
      "sgi_pipe",
      "shn",
      "siff",
      "simbiosis_imx",
      "sln",
      "smi",
      "smjpeg",
      "smk",
      "smush",
      "sndio",
      "sol",
      "son",
      "sox",
      "spdif",
      "sph",
      "srt",
      "ss2",
      "ssa",
      "st26",
      "stk",
      "stl",
      "stm",
      "stp",
      "str",
      "sub",
      "subviewer",
      "subviewer1",
      "sunrast_pipe",
      "sup",
      "svag",
      "svg_pipe",
      "svs",
      "sw",
      "swf",
      "tak",
      "tco",
      "tedcaptions",
      "thd",
      "thp",
      "tiertexseq",
      "tiff_pipe",
      "tmv",
      "truehd",
      "tta",
      "tty",
      "txd",
      "txt",
      "ty",
      "ty+",
      "u16be",
      "u16le",
      "u24be",
      "u24le",
      "u32be",
      "u32le",
      "u8",
      "ub",
      "ul",
      "ult",
      "umx",
      "uw",
      "v",
      "v210",
      "v210x",
      "vag",
      "vb",
      "vc1",
      "vc1test",
      "vidc",
      "video4linux2",
      "viv",
      "vividas",
      "vivo",
      "vmd",
      "vobsub",
      "voc",
      "vpk",
      "vplayer",
      "vqe",
      "vqf",
      "vql",
      "vt",
      "vtt",
      "w64",
      "wav",
      "wc3movie",
      "webm",
      "webm_dash_manifest",
      "webp_pipe",
      "webvtt",
      "wow",
      "wsaud",
      "wsd",
      "wsvqa",
      "wtv",
      "wv",
      "wve",
      "x11grab",
      "xa",
      "xbin",
      "xbm_pipe",
      "xl",
      "xm",
      "xmv",
      "xpk",
      "xpm_pipe",
      "xvag",
      "xwd_pipe",
      "xwma",
      "y4m",
      "yop",
      "yuv",
      "yuv10",
      "yuv4mpegpipe",
    ],
  },
  to: {
    muxer: [
      "264",
      "265",
      "302",
      "3g2",
      "3gp",
      "a64",
      "aac",
      "ac3",
      "adts",
      "adx",
      "afc",
      "aif",
      "aifc",
      "aiff",
      "al",
      "alaw",
      "alp",
      "alsa",
      "amr",
      "amv",
      "apm",
      "apng",
      "aptx",
      "aptxhd",
      "aptx_hd",
      "argo_asf",
      "asf",
      "asf_stream",
      "ass",
      "ast",
      "au",
      "avi",
      "avm2",
      "avs",
      "avs2",
      "bit",
      "bmp",
      "c2",
      "caca",
      "caf",
      "cavs",
      "cavsvideo",
      "chk",
      "chromaprint",
      "codec2",
      "codec2raw",
      "cpk",
      "crc",
      "dash",
      "data",
      "daud",
      "dirac",
      "dnxhd",
      "dnxhr",
      "dpx",
      "drc",
      "dts",
      "dv",
      "dvd",
      "eac3",
      "exr",
      "f32be",
      "f32le",
      "f4v",
      "f64be",
      "f64le",
      "fbdev",
      "ffmeta",
      "ffmetadata",
      "fifo",
      "fifo_test",
      "filmstrip",
      "film_cpk",
      "fits",
      "flac",
      "flm",
      "flv",
      "framecrc",
      "framehash",
      "framemd5",
      "g722",
      "g723_1",
      "g726",
      "g726le",
      "gif",
      "gsm",
      "gxf",
      "h261",
      "h263",
      "h264",
      "h265",
      "hash",
      "hds",
      "hevc",
      "hls",
      "ico",
      "ilbc",
      "im1",
      "im24",
      "im8",
      "image2",
      "image2pipe",
      "ipod",
      "ircam",
      "isma",
      "ismv",
      "ivf",
      "j2c",
      "j2k",
      "jacosub",
      "jls",
      "jp2",
      "jpeg",
      "jpg",
      "js",
      "jss",
      "kvag",
      "latm",
      "lbc",
      "ljpg",
      "loas",
      "lrc",
      "m1v",
      "m2a",
      "m2t",
      "m2ts",
      "m2v",
      "m3u8",
      "m4a",
      "m4b",
      "m4v",
      "matroska",
      "md5",
      "microdvd",
      "mjpeg",
      "mjpg",
      "mkv",
      "mkvtimestamp_v2",
      "mlp",
      "mmf",
      "mov",
      "mp2",
      "mp3",
      "mp4",
      "mpa",
      "mpd",
      "mpeg",
      "mpeg1video",
      "mpeg2video",
      "mpegts",
      "mpg",
      "mpjpeg",
      "msbc",
      "mts",
      "mulaw",
      "mxf",
      "mxf_d10",
      "mxf_opatom",
      "null",
      "nut",
      "oga",
      "ogg",
      "ogv",
      "oma",
      "opengl",
      "opus",
      "oss",
      "pam",
      "pbm",
      "pcm",
      "pcx",
      "pfm",
      "pgm",
      "pgmyuv",
      "pix",
      "png",
      "ppm",
      "psp",
      "pulse",
      "ra",
      "ras",
      "rawvideo",
      "rco",
      "rcv",
      "rgb",
      "rm",
      "roq",
      "rs",
      "rso",
      "rtp",
      "rtp_mpegts",
      "rtsp",
      "s16be",
      "s16le",
      "s24be",
      "s24le",
      "s32be",
      "s32le",
      "s8",
      "sap",
      "sb",
      "sbc",
      "scc",
      "sdl",
      "sdl2",
      "segment",
      "sf",
      "sgi",
      "singlejpeg",
      "smjpeg",
      "smoothstreaming",
      "sndio",
      "sox",
      "spdif",
      "spx",
      "srt",
      "ssa",
      "ssegment",
      "streamhash",
      "stream_segment",
      "sub",
      "sun",
      "sunras",
      "sup",
      "svcd",
      "sw",
      "swf",
      "tco",
      "tee",
      "tga",
      "thd",
      "tif",
      "tiff",
      "truehd",
      "ts",
      "tta",
      "ttml",
      "tun",
      "u16be",
      "u16le",
      "u24be",
      "u24le",
      "u32be",
      "u32le",
      "u8",
      "ub",
      "ul",
      "uncodedframecrc",
      "uw",
      "v4l2",
      "vag",
      "vc1",
      "vc1test",
      "vc2",
      "vcd",
      "vidc",
      "video4linux2",
      "vob",
      "voc",
      "vtt",
      "w64",
      "wav",
      "webm",
      "webm_chunk",
      "webm_dash_manifest",
      "webp",
      "webvtt",
      "wma",
      "wmv",
      "wtv",
      "wv",
      "xbm",
      "xface",
      "xml",
      "xv",
      "xwd",
      "y",
      "y4m",
      "yuv",
      "yuv4mpegpipe",
    ],
  },
};

export async function convert(
  filePath: string,
  fileType: string,
  convertTo: string,
  targetPath: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  options?: any,
): Promise<string> {
  // let command = "ffmpeg";

  // these are containers that can contain multiple formats
  // const autoDetect = [
  //   "mp4",
  //   "mkv",
  //   "avi",
  //   "mov",
  //   "m4a",
  //   "3gp",
  //   "3g2",
  //   "mj2",
  //   "psp",
  //   "m4b",
  //   "ism",
  //   "ismv",
  //   "isma",
  //   "f4v",
  // ];

  // if (!(fileType in autoDetect)) {
  //   command += ` -f "${fileType}"`;
  // }

  // command += ` -i "${filePath}"`;

  // if (!(convertTo in autoDetect)) {
  //   command += ` -f "${convertTo}"`;
  // }

  // command += ` "${targetPath}"`;

  const command = `ffmpeg -i "${filePath}" "${targetPath}"`;

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`error: ${error}`);
      }

      if (stdout) {
        console.log(`stdout: ${stdout}`);
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }

      resolve("success");
    });
  });
}
