# OpenCV.js简介和教程

## OpenCV

1999年 英特尔 的 Gary Bradski 发明了 OpenCV。第一次正式版在2000年推出。Vadim Pisarevsky加入了Gary Bradski，来 一起管理英特尔在俄罗斯的OpenCV团队。在2005年，OpenCV被用在Stanley，该车赢得了2005年的DARPA大赛的冠军。之后，OpenCV在Willow Garage的积极支持下，由 Gary Bradski和 Vadim Pisarevsky领导继续发展。现在OpenCV支持计算机视觉和机器学习的多种算法，并且日益扩展。

OpenCV支持多种的计算机语言比如C++、python和java，而且可以用在不同的平台，比如windows、linux、os X、安卓和ios。基于CUDA和OpenCL的高性能GPU接口也在迅速发展。OpenCV.js把OpenCV带到了web平台，并能让js开发者使用。

## OpenCV.js

web在开放式计算平台上最常见的，在所有已经实现html5标准的浏览器上，web应用可以通过html5的video标签渲染在线视频，通过webRTC API捕获网络摄像头视频，通过canvas API来访问视频帧的每个像素。在丰富的多媒体内容的情况下，web开发者需要大量的图像和视觉处理算法，来构建具有创造性的应用。对于新兴的网络应用，这种需求显得更为重要，比如网络虚拟现实和增强现实。所有的使用案例都需要在web的计算机视觉内核里有效地实现。

Emscrioten 是一个由LLVM到Javascript 的编译器。它把使用clang的C/C++生成的LLVM的位码编译到asm.js或者可以在浏览器中直接执行的WebAssembly。asm.js是一个高度可优化的，JavaScript低级子集，它可以在JavaScript引擎中提前编译和优化，从而拥有接近原生的运行速度。WebAssembly是一种新的可移植的、小体量、低加载时间的编码方式，适合编译到web平台。WebAssembly致力于接近原生的运行速度。w3c正在将WebAssembly设计成一个开放标准。

OpenCV.js是一个针对web平台的
