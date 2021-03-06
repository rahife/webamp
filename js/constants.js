import * as baseSkin from "./baseSkin.json";
export const BANDS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];

export const WINDOWS = {
  MAIN: "main",
  PLAYLIST: "playlist",
  EQUALIZER: "equalizer"
};

export const LOAD_STYLE = {
  BUFFER: "BUFFER",
  PLAY: "PLAY"
};

export const MEDIA_TAG_REQUEST_STATUS = {
  INITIALIZED: "INITIALIZED",
  FAILED: "FAILED",
  COMPLETE: "COMPLETE",
  NOT_REQUESTED: "NOT_REQUESTED"
};

export const UTF8_ELLIPSIS = "\u2026";
export const CHARACTER_WIDTH = 5;
export const WINDOW_RESIZE_SEGMENT_WIDTH = 25;
export const WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
export const WINDOW_HEIGHT = 116;
export const WINDOW_WIDTH = 275;
export const TRACK_HEIGHT = 13;
export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const DEFAULT_SKIN = baseSkin;

export const VISUALIZERS = {
  OSCILLOSCOPE: "OSCILLOSCOPE",
  BAR: "BAR",
  NONE: "NONE"
};

export const VISUALIZER_ORDER = [
  VISUALIZERS.BAR,
  VISUALIZERS.OSCILLOSCOPE, // TODO: Verify the order
  VISUALIZERS.NONE
];

export const TIME_MODE = {
  ELAPSED: "ELAPSED",
  REMAINING: "REMAINING"
};

export const MEDIA_STATUS = {
  STOPPED: "STOPPED",
  PAUSED: "PAUSED"
};
