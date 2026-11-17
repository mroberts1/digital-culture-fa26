---
title: Datamoshing 101
---

Source: David Tamés, Northeastern University

---
## Introduction to Datamoshing

This handout introduces datamoshing, a digital video manipulation techniques you can use to explore the structural and material qualities of digital video in a computational media context.

See also:

- [Experimental Moving Image Works](https://writingwithacamera.com/Handouts/Experimental)
- [Introduction to Video Synthesis](https://writingwithacamera.com/Handouts/Video-Synthesis)
- [Notes on remix video](https://writingwithacamera.com/Handouts/Remix-video)

---

## Introduction

![[008775d33c91bf5fcf321ba897f5f398_MD5.jpg]]

a frame from a video datamoshed using SuperMosh

Datamoshing is a glitch art technique that emerged in the early 2000s inspired by accidental glitches in digital video codecs. It involves intentionally corrupting the data of compressed video files to create visual distortions, melting colors, and ghosted pixel effects. By deliberately breaking some of the relationships between internal data structures, you can force the decoder to reveal its own operations, making visible the prediction algorithms of the video codec as material. This is Direct Theory in the computational media domain.

A basic understanding of how datamoshing works will help you achieve more intentional effects.[^1] Video codecs like H.264 use three frame types to reduce file size: I-frames are complete reference images, P-frames store only predicted changes from the previous frame, and B-frames reference both pieces of preceding and following frames. When you remove or manipulate the structural frames that codecs depend on, you force the decoder to apply motion from one shot onto the pixels of another, producing smeared, melting, blooming transitions. The artifacts make visible the motion-estimation algorithm of the codec operating on mismatched data. There are three popular approaches:

**I-Frame Removal (the “Melt” effect)**: This is the classic datamosh. You join two clips with a hard cut, encode them with minimal I-frames, then delete the I-frame at the transition point. The decoder then has no clean reference for where the second shot begins, so it keeps applying the new shot’s motion data to the previous shot’s pixels.

**P-Frame Duplication (the “Bloom” effect)**: Instead of removing I-frames, you can duplicate sequences of P-frames, causing the motion vectors to keep applying to an increasingly distorted image. This produces a “melting” or “blooming” effect where the image progressively dissolves through accumulated motion prediction. You can specify a range of P-frames to copy, then replace all subsequent groups of frames with that copied data, creating a repeating motion pattern.

**Hex Editing**: This is the old skool approach. Open an encoded MPEG file in a hex editor (e.g. HxD on Windows, Hex Fiend on Mac, or xxd in the terminal), skip past the file header, and start modifying byte values directly.[^2] This is unpredictable but produces genuinely unique results that more systematic tools can’t replicate. The key is to leave the header intact so the file remains parsable by video players and editors.

## SuperMosh

![[f9681c6011a6bc7415fe5cdfda279843_MD5.jpg]]

a frame from a slit scan video created with Hydra and then datamoshed using SuperMosh

Datamoshing has required complex technical expertise to achieve, either through direct file editing or running utilities that were finicky to use and required specific older versions of MacOS. There is a paid plug-in for AfterEffects that makes things easier, but requires AfterEffects. Now, thanks to [Nino Filiu](https://ninofiliu.com/) you can use [SuperMosh](https://supermosh.github.io/studio) to glitch your images and videos using a web-based editor. Take a look at the [SuperMosh v2 Tutorial](https://www.youtube.com/watch?v=M1OCjF-aJyo) (YouTube).

### Converting SuperMosh output (FFmpeg)

The files produced by Supermosh often can’t be read by the QuickTime Player, Resolve, and Premiere Pro, however, this is easily fixed using [FFmpeg](https://www.ffmpeg.org/) to convert the Supermosh mp4 downloads to mp4 files that can be played with QuickTime Player and edited using Resolve or Premiere Pro without problems. FFmpeg runs in the command line (change the resolution and frame rate as needed, the other parameters ensure the color space is Rec.709):

```
ffmpeg -i input.webp -vf scale=1920:1080 -r 29.97 -colorspace bt709 -color_primaries bt709 -color_trc bt709 -pix_fmt yuv420p output.mp4
```

### Converting SuperMosh output (Shutter Encoder or Handbrake)

If you prefer not to use FFmpeg in the command line, there are two free, open-source video transcoding tools to consider: [Shutter Encoder](https://www.shutterencoder.com/) and [Handbrake](https://handbrake.fr/), both work with nearly any video format.

[^1]: For a more detailed introduction to datamoshing, see [What is Datamoshing? A Detailed Guide to Video Glitch Art](https://spotlightfx.com/blog/what-is-datamoshing) by Denis Stefanides (Spotlight FX, February 26, 2026).

[^2]: For more information on hex editing, see [How to datamosh videos with data corruption](http://datamoshing.com/2016/06/17/how-to-datamosh-videos-with-data-corruption/) by Phil Tucker (Datamoshing, June 17, 2016).
