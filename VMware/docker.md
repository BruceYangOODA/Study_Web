
https://docs.docker.com/engine/install/ubuntu/


將帳號加入docker群組，不須再用 sudo
sudo usermod -aG docker 帳號

# 取得docker資訊
docker info

# 取得 container 詳細資訊
docker container inspect CONTAINER_ID

# docker hollow world
docker run -it alpine ash



