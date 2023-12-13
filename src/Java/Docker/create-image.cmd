docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog5-java/app ../../..
