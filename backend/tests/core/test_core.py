from django.test import SimpleTestCase


class CoreTests(SimpleTestCase):
    def test_initial_core(self):
        assert 1 == 1
