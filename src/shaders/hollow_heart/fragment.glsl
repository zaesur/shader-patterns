varying vec2 vUv;

void main()
{
    vec2 heartUv = vec2(
        vUv.x,
        vUv.y - sqrt(abs(vUv.x - 0.5) * 0.3)
    );

    float strength = 1.0 - smoothstep(
        0.005,
        0.015,
        abs(distance(heartUv, vec2(0.5)) - 0.25)
    );

    gl_FragColor = vec4(vec3(strength), 1.0);
}