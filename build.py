import shutil
import subprocess
from os import listdir
from os.path import join


def build_react():
    try:
        subprocess.run(["cd", "frontend", "&", "npm", "run",
                       "build"], shell=True, check=True)
    except subprocess.CalledProcessError:
        pass


def copy_sources():
    frontend = join('frontend', 'dist')
    backend = join('backend', 'static')

    shutil.copytree(frontend, backend)


if __name__ == '__main__':
    # build_react()
    copy_sources()
