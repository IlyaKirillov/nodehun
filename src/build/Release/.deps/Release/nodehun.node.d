cmd_Release/nodehun.node := ./gyp-mac-tool flock ./Release/linker.lock g++ -shared -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release -install_name /usr/local/lib/nodehun.node  -o Release/nodehun.node Release/obj.target/nodehun/nodehun.o Release/hunspell.node -undefined dynamic_lookup