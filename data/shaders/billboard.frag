uniform sampler2D tex;

in vec2 uv;
out vec4 FragColor;

void main(void)
{
    vec4 color = texture(tex, uv);
    FragColor = vec4(color.a * color.rgb, color.a);
}
