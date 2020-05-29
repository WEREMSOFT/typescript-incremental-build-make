#////////////////////
# check which OS Am I
#////////////////////

ifeq ($(OS),Windows_NT)
	DETTECTED_OS := $(OS)
else
	UNAME_S := $(shell uname -s)
	DETTECTED_OS := $(UNAME_S)
endif

#//////////////////////////////
# Define some usefull variables
#//////////////////////////////

# Vars for binary build
CC := ./node_modules/.bin/tsc
WP := ./node_modules/.bin/webpack
SRC_D := src/
BLD_D := bin/
OBJ_D := obj/
ASST_D := assets/
TEST_SRC_D := tests/
TEST_BLD_D := $(TEST_SRC_D)bin/
LIBS_D := libs/
HTML_D := html/

INCLUDE_D := 
STATIC_LIBS_D := 
CFLAGS := --allowJs --pretty #--typeRoots $(OBJ_D), $(OBJ_D)/core
DEBUGGER := kdbg # Other options: cgdb gdb
MK_DIR:= mkdir -p
BIN_EXTENSION = js
SRC_EXTENSION = ts

# Call to compilers / linkers
CC_COMMAND := $(CC) $(CFLAGS)

#//////////////////////////////////////////////////
# Set static libraries depending on de dettected OS
#//////////////////////////////////////////////////

ifeq ($(DETTECTED_OS),Linux)
	LINK_LIBS :=
	TEST_LINK_LIBS := -lunity 
	#LINK_LIBS := -l:libraylib-linux.a -l:libglfw3.a -lm -ldl -lpthread -lX11 -lxcb -lGL -lGLX -lXext -lGLdispatch -lXau -lXdmcp
else ifeq ($(DETTECTED_OS),Darwin)
	LINK_LIBS := 
	#LINK_LIBS := -O0 -framework IOKit -v -lraylib -framework OpenGL -framework cocoa 
endif

#//////////////
# Build Targets
#//////////////

.PHONY: test run_% debug_optimized debug_unoptimized print_information create_folder_structure run_html_u run_html_o run_performance_test init_project

all: print_information $(BLD_D)main.$(BIN_EXTENSION)

$(BLD_D)main.$(BIN_EXTENSION): $(patsubst src/%.ts,obj/%.js,$(wildcard src/*.ts src/**/*.ts))
	@echo building $@
	$(WP)


$(OBJ_D)%.$(BIN_EXTENSION): $(SRC_D)%.$(SRC_EXTENSION)
	@echo Building ###$(subst $(SRC_D),$(OBJ_D),$(dir $^))
	$(CC) -d --outDir $(subst $(SRC_D),$(OBJ_D),$(dir $^)) $^

$(BLD_D)%.$(BIN_EXTENSION): $(SRC_D)%.$(SRC_EXTENSION)
	@echo "### Building tests for $(@) START ###"
	$(CC_COMMAND) --outDir $(BLD_D) $^
	@echo "### End ###"
	@echo ""

print_information:
	@echo "Dettected OS: $(DETTECTED_OS)"

create_folders:
	$(MK_DIR) $(BLD_D)
	$(MK_DIR) $(SRC_D)
	$(MK_DIR) libs/include
	$(MK_DIR) libs/static
	$(MK_DIR) $(HTML_D)
	$(MK_DIR) $(TEST_BLD_D)
	$(MK_DIR) $(ASM_D)
	
init_project: create_folders
	touch ./src/main.$(SRC_EXTENSION)

clean:
	rm -rf $(BLD_D)*
	rm -rf $(OBJ_D)*

run_%: $(BLD_D)%.$(BIN_EXTENSION)
	node $^
