varying vec2 vUv;

void main()
{
    float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    angle /= PI * 2.0;
    angle += 0.5;
    angle *= 20.0;
    float strength = mod(angle, 1.0);

    gl_FragColor = vec4(vec3(strength), 1.0);
}