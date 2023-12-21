FROM emscripten/emsdk:1.39.0
RUN apt-get update && \
    apt-get install -y libtool autoconf && \
    rm -rf /var/cache/apt/archives /var/lib/apt/lists

COPY build.sh /build.sh

CMD ["sh", "/build.sh"]
