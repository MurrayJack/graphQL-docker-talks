# Entry Provider

## Docker Build

```
$ docker build -t murrayjack/entry-provider .
```

```
$ docket push murrayjack/entry-provider
```

```
docker run -d -p 8080:80 --name entry murrayjack/entry-provider
```

URL: http://localhost:8080/api/values