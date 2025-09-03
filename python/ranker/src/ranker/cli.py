from typer import Typer

app = Typer(help="NHL Fanteasy Ranker CLI")


@app.command()
def hello(name: str = "world") -> None:
    print(f"Hello, {name}!")


if __name__ == "__main__":
    app()


