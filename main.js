nx=0;
ny=0;
di=0;
rw=0;
lw=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, mL);
    posenet.on("pose", gotPoses);

}

function mL()
{
    console.log("model loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}